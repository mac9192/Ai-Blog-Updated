import { createDirectus, rest, readItems } from '@directus/sdk';
import directus from '../lib/directus'
import { cache } from 'react'

export const getCategoryData = cache(
    async (categorySlug: string, locale: string) => {
      try {
  
        const category = await directus.request(
          readItems('post', {
    filter: {
            slug: {
              _eq: categorySlug
            }
          },
            fields: [
            "*", //Will get everything from our table
            "author.id",
            "author.first.name",// (.) period means: go up a level on tables to the relational tables
            "author.last.name",
            "category.id",
            "category.title",
            "translations.*",
            "category.translations.*"
          ],
        
          })
    
        )    
  
  
      
  
        if (locale === "en") {
          return category?.[0];
        } else {
          const fetchedCategory = category?.[0];
          const localisedCategory = {
            ...fetchedCategory,
            title: fetchedCategory.translations[0].title,
            description: fetchedCategory.translations[0].description,
            posts: fetchedCategory.posts.map((post: any) => {
              return {
                ...post,
                title: post.translations[0].title,
                description: post.translations[0].description,
                body: post.translations[0].body,
                category: {
                  ...post.category,
                  title: fetchedCategory.translations[0].title,
                },
              };
            }),
          };
          return localisedCategory;
        }
      } catch (error) {
        console.log(error);
        throw new Error("Error fetching category");
      }
    }
  );


  export const getPostData = cache(async (postSlug: string, locale:string)=> {
    try {
      
      const post = await directus.request(
        readItems('post', {
  filter: {
          slug: {
            _eq: postSlug
          }
        },
          fields: [
          "*", //Will get everything from our table
          "author.id",
          "author.first.name",// (.) period means: go up a level on tables to the relational tables
          "author.last.name",
          "category.id",
          "category.title",
          "translations.*",
          "category.translations.*"
        ],
      
        })
  
      )    
  
   
      const postData = post?.[0]
  
      if(locale === 'en'){
        return postData;
      }else{
        const localisedPostData = {
          ...postData,
          title: postData?.translations?.[0]?.title,
          description: postData?.translations?.[0]?.description,
          body: postData?.translations?.[0]?.body,
          category: {
            ...postData?.category,
            title: postData?.category?.translations?.[0]?.title
          }
  
        }
        return localisedPostData;
      }
      
  
    } catch (error) {
      
    }
  }
  )