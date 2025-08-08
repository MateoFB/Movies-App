import { useEffect, useState } from "react";

const useFetch = <T,>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        console.log('fetching data...');
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFunction();
            console.log('resultado',result);
            setData(result);
        } catch (err) {
            console.log('error', err);
            setError(err instanceof Error ? err.message : "An error occurred");
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);


    return { data, error, loading, refetch: fetchData, reset };
};

export default useFetch;


