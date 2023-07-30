import axios from "axios";
import { getNews } from "../src/utils/newsDataService";
import testNewsData from "./testNewsData.json";
import { vi } from 'vitest'

vi.mock(`axios`);

describe(`getNews tests`, () =>
{
    describe(`GET request tests to /response`, () =>
    {
        it(`1- should make the external data call`, async () =>
        {
            axios.get.mockResolvedValueOnce({ data: testNewsData });
            await getNews();
            expect(axios.get).toHaveBeenCalled()
        });
        test(`2- Should return the request with the correct data`, async () =>
        {
            axios.get.mockResolvedValueOnce({ data: testNewsData });
            const result = await getNews();
            expect(result).toEqual(testNewsData);
        });

        test('3- Should return the error object when the request is unsuccessful', async () =>
        {
            const error = { message: `Error` }
            axios.get.mockRejectedValueOnce(error);
            const result = await getNews();
            expect(result).toEqual(error);
        });

    });
});

