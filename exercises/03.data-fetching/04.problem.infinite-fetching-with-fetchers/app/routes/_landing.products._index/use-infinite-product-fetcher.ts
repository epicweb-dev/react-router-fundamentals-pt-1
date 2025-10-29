import { useState, useEffect, useCallback } from "react"
import { useFetcher, useSearchParams, href } from "react-router"
// 💰 use this to type the route
import { type Route } from "./+types/route"

export function useInfiniteProductFetcher(
  // 🐨 we want to type the loader data to be the type of the returned loader data of the products listing page
  // 💰 Route.ComponentProps['loaderData']
  loaderData: any,
) {
  // 💰 we are fetching from the same loader, so we can type this fetcher with the same type as loader-data
  const fetcher = useFetcher<any>({
    // 🐨 Let's define a fetcher key for this fetch
    // 💰 key should be infinite-product-fetcher

  })
  // 💰 we are extracting the initial data we fetched and then we will load more from the server
  const { products, pagination } = loaderData
  const [allProducts, setAllProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(pagination.page)
  const [hasMore, setHasMore] = useState(pagination.hasMore)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [searchParams] = useSearchParams()
  useEffect(
    // 🐨 whenever we change the filters we should start from the beginning again
    function resetStateOnLoaderRefire() {
      // 💰 whenever we reset the URL and the loader returns new products, we want to reset the state to the initial values
      // 💰 setAllProducts(products)
      // 💰 setCurrentPage(pagination.page)
      // 💰 setHasMore(pagination.hasMore)

    },
    [pagination.hasMore, pagination.page, products],
  )

  useEffect(

    // 🐨 whenever we load the new products we want to append them to the existing array
    function setNewlyLoadedProducts() {
      // 💰 we want to make sure that the fetcher has returned some data and it's defined, and it is idle and we were loading more products
      if (false) {
        // 💰 we append the newly loaded products to the existing array
        // 💰 setAllProducts((prev) => [...prev, ...(fetcher.data.? ??[])])
        // 💰 we update the current page
        // 💰 setCurrentPage(fetcher.data.?)
        // 💰 we update the hasMore flag
        // 💰 setHasMore(fetcher.data.?)
        // 💰 we set isLoadingMore to false
        // 💰 setIsLoadingMore(false)
      }
    },
    [fetcher.data, fetcher.state, isLoadingMore],
  )

  const loadMoreProducts = useCallback(() => {
    // 🐨 we want to create the new search params so we can submit that to the loader so it gives us the next page of results
    // 💰 we set the flag to true
    // 💰 setIsLoadingMore(true)
    // 💰 we use the current page to create the next page
    // 💰 const nextPage = currentPage + 1

    // 💰 Create URL params for the fetch
    // 💰 const params = new URLSearchParams(searchParams)
    // 💰 params.set('page', nextPage.toString())

    // 🐨 finally we want to load the next page using the fetcher
    // 💰 use the `load` function and call the /products page in a type-safe manner (href function) and append the search params
    // 💰  + "?" + params.toString()

  }, [currentPage, fetcher, searchParams])

  return { fetcher, loadMoreProducts, allProducts, hasMore, isLoadingMore }
}