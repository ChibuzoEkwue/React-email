# React Email

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Creating email templates is not always as easy as designing web pages. Same way we use responsive designs to match various screen sizes. In this case simply put it might look good on gmail but werid on outlook. 

A solution I found to handle creating and sending out of emails are [react email](https://react.email) and [resend](https://resend.com). React email allows us to design email templates in react and send them with resend.


To run this project locally, first you will need to clone the application then install it.

After clonning the repo run the code below to install all dependencies:

```bash
npm install

```

To run the development server:

```bash
npm run dev

```

React email can spin a server so can see all our templates as we design

To run the react email server

```bash
npm run email

```

By default Next js will run a server on port **3000**, but we have set a flag in our react email script to point at port **3003**

```js
"scripts": {
    "email": "email dev --dir src/emails/templates --port 3003"
  }

```
