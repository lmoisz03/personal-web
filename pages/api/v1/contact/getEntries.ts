import { supabase } from "@/src/lib/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await supabase.from("contact_form_entries").select();
  res.status(200).json(data);
  // res.end().send("Not yet");
};

export default handler;
