import Usersubexpired from '@/components/usersubexpired'
import Firstsection from '@/components/firstsection'
import Lastsectiom from '@/components/lastsectiom'
import Usersubnearexpire from '@/components/usersubnearexpire'
import Usersubnormalui from '@/components/usersubnormalui'
import Offerforuser from '@/components/offerforuser'

// const user = {
//   "user": {
//     "first_name": "Aditya",
//     "last_name": "Shukla",
//     "mobile": "+917738722582",
//     "email": "aditya.shukla@travelxp.tv",
//     "subscription": {
//       "plan_id": "60680109c34f87fb213eba64",
//       "plan_name": "Red Plus",
//       "resolution": "4k",
//       "maxusers": 5,
//       "concurrent": 5,
//       "show_ads": false,
//       "download": false,
//       "start_date": "",
//       "end_date": "",
//       "validity": 365,
//       "savings": {
//         "total": 0,
//         "flight": 0,
//         "hotel": 0,
//         "holiday": 0
//       },
//       "autorenewal": false,
//       "amount": 1999,
//       "txpin": "TXPIN-37614",
//       "grace_till_date": "",
//       "locking_period": 120
//     },
//     "users": [
//       {
//         "type": "owner",
//         "name": "Aditya Shukla",
//         "id": "",
//         "mobile": "7738722582",
//         "cc": "+91",
//         "accepted": false,
//         "registered": false,
//         "added_on": "12-01-2023"
//       },
//       {
//         "id": "",
//         "name": "Naren Vora",
//         "mobile": "+919930662167",
//         "accepted": false,
//         "registered": false,
//         "added_on": "12-01-2023"
//       }
//     ]
//   },
//   "data": [
//     {
//       "type": "hero-banner-detailed",
//       "title": "Backpack India",
//       "items": [
//         {
//           "type": "rectangle-card",
//           "title": "Offers",
//           "config": "custom",
//           "items": [
//             {
//               "product": "flight",
//               "title": "City Breaks",
//               "short_description": "Different cities in the world have different characters, and our hosts find out how to enjoy the most of it on a short break.",
//               "images_alt": "",
//               "images": [
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1620_2_3_logo_v6.JPG",
//                   "aspect": "2:3",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1920_9_16_logo_v6.JPG",
//                   "aspect": "9:16",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1350_4_5_logo_v6.JPG",
//                   "aspect": "4:5",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1080_1_1_logo_v6.JPG",
//                   "aspect": "1:1",
//                   "logo": true
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1920_9_16_v1.jpg",
//                   "aspect": "9:16",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1350_4_5_v1.jpg",
//                   "aspect": "4:5",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1620_2_3_v1.jpg",
//                   "aspect": "2:3",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1080_1_1_v1.jpg",
//                   "aspect": "1:1",
//                   "logo": false
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1920_1080_16_9_logo_v7.jpg",
//                   "aspect": "16:9",
//                   "logo": true
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1920_1080_16_9_v1.jpg",
//                   "aspect": "16:9",
//                   "logo": false
//                 }
//               ],
//               "clickable": true,
//               "link": ""
//             },
//             {
//               "product": "flight",
//               "title": "City Breaks",
//               "short_description": "Different cities in the world have different characters, and our hosts find out how to enjoy the most of it on a short break.",
//               "images_alt": "",
//               "images": [
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1620_2_3_logo_v6.JPG",
//                   "aspect": "2:3",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1920_9_16_logo_v6.JPG",
//                   "aspect": "9:16",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1350_4_5_logo_v6.JPG",
//                   "aspect": "4:5",
//                   "logo": true
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1080_1080_1_1_logo_v6.JPG",
//                   "aspect": "1:1",
//                   "logo": true
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1920_9_16_v1.jpg",
//                   "aspect": "9:16",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1350_4_5_v1.jpg",
//                   "aspect": "4:5",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1620_2_3_v1.jpg",
//                   "aspect": "2:3",
//                   "logo": false
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1080_1080_1_1_v1.jpg",
//                   "aspect": "1:1",
//                   "logo": false
//                 },
//                 {
//                   "image": "/programs/city_breaks_5f97c79dc5095d7e3af8c589/city_breaks_s1_e3_1920_1080_16_9_logo_v7.jpg",
//                   "aspect": "16:9",
//                   "logo": true
//                 },
//                 {
//                   "image": "/episodes/city_breaks/city_breaks_budapest_5ffe9ad5623b58327a2e515f/city_breaks_s1_e3_1920_1080_16_9_v1.jpg",
//                   "aspect": "16:9",
//                   "logo": false
//                 }
//               ],
//               "clickable": true,
//               "link": ""
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// `${user.data[0].type}` 

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Firstsection />
      <Usersubnormalui />
      <Usersubnearexpire />
      <Usersubexpired/>
      <Offerforuser />
      <Lastsectiom />
    </main>
  )
}
