import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";

// export const Footer = () => {
//   return (
//     <>
//       <Box
//         bg="gray.700"
//         w="full"
//         mx="auto"
//         px={{ base: "2", md: "2" }}
//         py={{ base: "1", md: "2" }}
//         justifyContent="center"
//         alignItems="center"
//         display="flex"
//       >
//         <Link href="#" color="white" fontSize="base" textAlign="center">
//           Back to top
//         </Link>
//       </Box>
//       <Flex
//         bg="gray.800"
//         w="full"
//         mx="auto"
//         px={{ base: "2", md: "48", lg: "96" }}
//         py={{ base: "4", md: "10" }}
//         justifyContent={{ base: "center", md: "space-between" }}
//         alignItems={{ base: "center", md: "flex-start" }}
//         flexWrap="wrap"
//       >
//         <Box
//           my={{ base: "2", md: "0" }}
//           textAlign={{ base: "center", md: "left" }}
//         >
//           <Text fontWeight="bold" color="white" fontSize="base">
//             Get to Know Us
//           </Text>
//           <ul className="text-gray-200 text-base">
//             <li className="leading-5">
//               <Link href="#">Careers</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Blog</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">About Amazon</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Sustainability</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Investor Relations</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Amazon Devices</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Amazon Tours</Link>
//             </li>
//           </ul>
//         </Box>
//         <Box
//           my={{ base: "2", md: "0" }}
//           textAlign={{ base: "center", md: "left" }}
//         >
//           <Text fontWeight="bold" color="white" fontSize="base">
//             Make Money with Us
//           </Text>
//           <ul className="text-gray-200 text-base">
//             <li className="leading-5">
//               <Link href="#">Sell products on Amazon</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Sell apps on Amazon</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Become an Affiliate</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Advertise Your Products</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Self-publish with Us</Link>
//             </li>
//             <li className="leading-5">
//               <Link href="#">Host an Amazon Hub</Link>
//             </li>
//           </ul>
//         </Box>
//         <Box
//           my={{ base: "2", md: "0" }}
//           textAlign={{ base: "center", md: "left" }}
//         >
//           <Text fontWeight="bold" color="white" fontSize="base">
//             Amazon Payment Products
//           </Text>
//         </Box>
//       </Flex>
//     </>
//   );
// };
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button className="footer__button" type="button" onClick={scrollToTop}>
        Back to Top
      </button>

      <div className="footer__columns">
        <div className="footer__column">
          <strong>Get to Know Us</strong>
          <p>Carrers</p>
          <p>Blogs</p>
          <p>About Amazon</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer__column">
          <strong>Connect with Us</strong>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__column">
          <strong>Make Money with Us</strong>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footer__column">
          <strong>Let Us Help You</strong>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer_img">
        <img
          src="https://cutewallpaper.org/24/amazon-logo-transparent-png/amazon-a4973-icon-d83c1-transparent-b427e-amazonpng-3515f-images-7b309-amp-b1239-vector-f65bc-freeiconspng.png"
          alt=""
        />
      </div>
    </div>
  );
}
