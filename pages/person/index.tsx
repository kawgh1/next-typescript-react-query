import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { IPerson } from "../../src/lib/interfaces/IPerson";

type Props = {};

const PersonPage = (props: Props) => {
    const { status, error, data }: UseQueryResult<IPerson, Error> = useQuery<
        IPerson,
        Error
    >("person", async () => {
        // here "person" is our cache key for the query
        const res = await fetch("/api/person");
        return res.json();
    });
};

export default PersonPage;
