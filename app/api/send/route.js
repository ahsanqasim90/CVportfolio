// import type { NextApiRequest, NextApiResponse } from 'next';
// //import { EmailTemplate } from '../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Ahsan <ahsanmughal2003@gmail.com>',
//     to: ['qasimahsan2003@gmail.com'],
//     subject: 'Hello world',
//     react: (<>
//     <p>
//         Email Body
//     </p>
//     </>),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
