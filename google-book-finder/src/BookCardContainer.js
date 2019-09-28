import React from 'react';
import BookCard from './BookCard';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class BookCardContainer extends React.Component {

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <Grid container
                className={classes.root}
                justify="space-evenly">
                {
                    this.props.books.map(
                        book => < BookCard book={book} />
                    )}
            </Grid>
        )
    }
}

BookCardContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCardContainer);
