import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const ContactUs = () => {
  return (
    <Layout>
        <div className='w-[70%] max-md:w-[95%] mx-auto '> 


<h1 className='text-xl font-bold'>About Us</h1>
<br />
<br />
Welcome to Eshopsy, your number one source for all things insert specific products or categories. We're dedicated to giving you the very best of  product/service, with a focus on quality, customer service, and uniqueness.
<br />
<br />
<h1 className='text-xl font-semibold'>Our Story</h1>

Founded in 2023, Eshopsy has come a long way from its beginnings in Uttar Pradesh , Kushinagar. When we first started out, our passion for selling clothes and electronics items drove us to start our own business.

We now serve customers all over Uttar pradesh, and are thrilled to be a part of the  industry type industry. Our commitment to  specific value or mission: e.g., providing high-quality, sustainable products, ensuring customer satisfaction, etc. guides everything we do.

<br />
<br />
<h1 className='text-xl font-semibold'>
Our Mission</h1>
At Eshopsy, we believe in the power of  value/mission: e.g., innovation, sustainability, customer-centric service. Our mission is to offer  target audience: e.g., families, tech enthusiasts, fashion lovers a diverse range of high-quality products that meet their needs and exceed their expectations.

Our Values
Quality: We prioritize high standards for our products to ensure they are durable, reliable, and of great value.
Customer Service: We are dedicated to providing exceptional customer service, ensuring a smooth and enjoyable shopping experience.
Innovation: We continuously seek out new trends and innovations to bring you the best the market has to offer.
Sustainability: We are committed to environmentally-friendly practices and sourcing products that have a minimal impact on our planet.
Our Team
Our team is made up of passionate individuals who share a common goal: to make your shopping experience as seamless and enjoyable as possible. We work hard to curate a selection of products that cater to your tastes and preferences, ensuring there is something for everyone at Eshopsy.

<br />
<br />
<h1 className='text-xl font-bold'>Connect With Us</h1>

We love to hear from our customers! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us through our
<NavLink to={"/contact-us"}>
    Contact Us page. 
</NavLink>


Thank you for choosing Eshopsy. We look forward to serving you!
      
    </div>
    </Layout>
  )
}

export default ContactUs
