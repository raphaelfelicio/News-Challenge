import axios from 'axios';

export const getNews = async () =>
{
    try
    {
        const responseData = await axios.get(` https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=f13d81c6-c68c-43e8-81f2-a459c06484f2`);
        return responseData.data;
    }
    catch (error)
    {
        return error;
    }
}