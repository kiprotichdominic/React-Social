import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"

function Feed() {
    return (
        <Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="500px"
                    image="https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/06/Post-29-2-1024x1024.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed
