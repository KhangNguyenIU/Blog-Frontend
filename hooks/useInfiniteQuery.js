import useSWRInfinite from 'swr/infinite'


export default function useInfiniteQuery(){
    const {} = useSWRInfinite(
        (pageIndex, previousPageData)=>{
            
        }
    )
}