import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotAvailableImage from './not_available.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        width: 400,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 500,
        margin: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class BookCard extends React.Component {

    state = {
        expanded: false
    }

    handleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.book.volumeInfo)
        return (
            <div>
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>

                            {this.props.book.volumeInfo.imageLinks !== undefined ?
                                <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="cover" height="200px" width="150px"></img>
                                :
                                <img src={NotAvailableImage} alt="cover" height="200px" width="150px"></img>
                            }

                            <Typography variant="h6">Title: {this.props.book.volumeInfo.title}</Typography>
                            <Typography variant="subtitle1"></Typography><Typography>Authors: {this.props.book.volumeInfo.authors !== undefined ? this.props.book.volumeInfo.authors.join(", ") : "Unknown"}</Typography>
                            <Typography>Publisher: {this.props.book.volumeInfo.publisher}</Typography>
                            <Typography>Published Date: {this.props.book.volumeInfo.publishedDate !== undefined ? this.props.book.volumeInfo.publishedDate : "Unknown"}</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                                onClick={this.handleExpanded}
                                aria-expanded={this.state.expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    <a href={this.props.book.volumeInfo.infoLink}>Learn more</a>
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </div >
        )
    }
}

BookCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCard);