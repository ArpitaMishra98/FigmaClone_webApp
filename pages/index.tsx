import React from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import bannerImage from './assets/banner.jpg';
import featureImage1 from './assets/feature1.jpg';
import featureImage2 from './assets/feature2.jpg';
import featureImage3 from './assets/feature3.jpg';


const index: React.FC = () => {


  return (
    <div >
      <div >
        <Container>
          <Typography className='title' >
            Welcome to Figma Website
          </Typography>

        </Container>
      </div>
      <Container>
        <Typography className='heading1'>
          Explor All Features of Figma
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card >
              <CardMedia
                title="Feature 1"
                image='https://www.freecodecamp.org/news/content/images/2021/09/figmacourse.png'
              />
              <CardContent className='maincard'>
                <Typography variant="h5" component="h2" className="flow"  >
                  Drawing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p"  className='pre'>
                  All types of drawing is available
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card >
              <CardMedia
                title="Feature 2"
                image='https://www.freecodecamp.org/news/content/images/2021/09/figmacourse.png'
              />
              <CardContent className='maincard'>
                <Typography gutterBottom variant="h5" component="h2" className="flow" >
                  Flowchart
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p"  className='pre'>
                  Different type of Flowchart placed                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card >
              <CardMedia
                title="Feature 3"
                image='https://www.freecodecamp.org/news/content/images/2021/09/figmacourse.png'
              />
              <CardContent className='maincard'>
                <Typography gutterBottom variant="h5" component="h2" className="flow" >
                  Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className='pre'>
                  This section is made for making Portfolio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default index


