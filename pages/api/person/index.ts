import { NextApiRequest, NextApiResponse } from "next";
import { IPerson } from "../../../src/lib/interfaces/IPerson";

// route /person

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse<IPerson>): void => {
    res.status(200).json({ id: "1", name: "John Doe", age: 25 });
};
