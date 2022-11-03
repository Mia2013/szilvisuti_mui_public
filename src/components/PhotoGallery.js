import { Gallery, Item } from 'react-photoswipe-gallery'
import { Grid, Box } from "@mui/material"

const MyGallery = ({ photos, path, caption, extension }) => (
  <Gallery id="my-gallery" withCaption>
    <Grid container justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {photos.map(photo => (
        <Item
          original={`${process.env.PUBLIC_URL}/assets/${path}/${photo.name}.${extension}`}
          thumbnail={`${process.env.PUBLIC_URL}/assets/${path}/${photo.name}.${extension}`}
          caption={caption}
          key={photo.name}
          width={ photo.width ? photo.width : "433"} 
          height = { photo.height ? photo.height : "577"} 
        >
          {({ ref, open }) => (
            <Grid item xs={4} md={2} >
              <Box
              data-aos="flip-left" 
                component="img"
                ref={ref}
                onClick={open}
                className="small-images"
                src={`${process.env.PUBLIC_URL}/assets/${path}/${photo.name}.${extension}`}
                alt="Torta"
                sx={{
                  objectFit: "cover",
                  height: {
                  xs: photo.xsHeight ? photo.xsHeight : "160px", 
                  sm: photo.smHeight ? photo.smHeight : "200px", 
                  md: photo.mdHeight ? photo.mdHeight : "240px"
                }, 
                  width: {
                    xs: photo.xsWidth ? photo.xsWidth : "100%", 
                    sm: photo.smWidth ? photo.smWidth : "70%", 
                    md: photo.mdWidth ? photo.mdWidth : "100%"
                  },
                  cursor: "pointer"
                }}
              />
            </Grid>
          )}
        </Item>

      ))}
    </Grid>
  </Gallery>
);

export default MyGallery;