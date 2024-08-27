// // "use client"

// // import React from 'react';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import CardActionArea from '@mui/material/CardActionArea';

// // const MyCard = ({ title, description, imageUrl }) => {
// //   return (
// //     <Card sx={{ maxWidth: 300 }} sm={12} md={3} lg={4}>
// //   <CardActionArea>
// //         <CardMedia
// //           component="img"
// //           width="500"
// //           height="300"
// //           image={imageUrl}
// //           alt={title}
// //         />
// //         <CardContent>
// //           <Typography gutterBottom variant="h5" component="div">
// //             {title}
// //           </Typography>
// //           {description && <Typography variant="body2" color="text.secondary">
// //             {description}
// //           </Typography>}
// //         </CardContent>
// //       </CardActionArea>
// //     </Card>
// //   );
// // };

// // export default MyCard;

// "use client";

// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";

// const MyCard = ({ title, description, imageUrl }) => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 300,
//         height: 300,
//         boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Adding shadow box effect
//       }}
//       sm={12}
//       md={3}
//       lg={4}
//     >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           width="200"
//           height="200"
//           image={imageUrl}
//           alt={title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             {title}
//           </Typography>
//           {description && (
//             <Typography variant="body2" color="text.secondary">
//               {description}
//             </Typography>
//           )}
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default MyCard;

"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const MyCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 300,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Adding shadow box effect
        borderRadius: "16px", // Adding border radius to the card
        overflow: "hidden", // Ensuring content respects border radius
      }}
      sm={12}
      md={3}
      lg={4}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="200"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{ borderRadius: "16px 16px 0 0" }} // Adding border radius to the image (top corners)
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
