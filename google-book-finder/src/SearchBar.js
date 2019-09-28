import React from 'react';
import BookCardContainer from './BookCardContainer';
//material ui component
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
    button: {
        margin: `100 px auto`,
    },
    input: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        flexBasis: 200,
        display: "flex",
        flexWrap: "wrap"
    },
    menu: {
        width: 200,
    },
});

class SearchBar extends React.Component {

    state = {
        booksData: [],
        totalItems: "",
        query: "",
        isLoading: false,
        totalPages: 0,
        currentPageNo: 0
    }

    //fetch google books data when submitting search form
    fetchData = () => {
        //My unique API key, no authentication needed. 
        //This key is only allowed for Google Books API.
        const ApiKey = 'AIzaSyAXJai7q64-kw03ojn8H2XVm8AOoTiUrqM';
        let query = this.state.query.split(" ").join("+");
        //for the use of pagination
        let startIndex = 0
        let maxResults = 20; //max allowed results in api
        //TODO: each new page, run fetchData() again, change startIndex=maxResults+1
        let booksURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${ApiKey}&max-result=40`;
        console.log(booksURL)
        async function getData() {
            try {
                const response = await fetch(booksURL);
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                } else {
                    let data = await response.json()
                    return data;
                }
            } catch (error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
            }
        }
        getData()
            .then(data => {
                //convert into number, get total number of search results
                const totalResults = Number(data.totalItems)
                const totalPagesCount = this.getPagesCount(totalResults, 20)
                this.setState({
                    //send books information to state
                    booksData: data.items,
                    totalItems: totalResults,
                    isLoading: false,
                    totalPages: totalPagesCount,
                })
                console.log(totalPagesCount)
            })
    }

    //To display all results, need to get page count first
    getPagesCount = (total, denominator) => {
        const divisible = total % denominator === 0;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor(total / denominator) + valueToBeAdded;
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        //If query is not an empty string, then fetch data
        if (this.state.query !== "") {
            this.setState({ isLoading: true })
            this.fetchData()
        }
    }

    render() {
        const { classes } = this.props;
        let notice;
        //Edge case:
        if (this.state.isLoading) {
            notice = <Typography variant="h3">Searching...</Typography>
        } else {
            //If it returns 0 search result
            if (this.state.totalItems === 0) {
                notice = <Typography variant="h3">No books found.</Typography>
            } else if (this.state.totalItems !== "" || 0) {
                notice = <Typography variant="h4">{this.state.totalItems} results. Displaying the first 40 results.</Typography>
            }
        }

        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={6}>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField
                            id="search"
                            label="Search for a book..."
                            className={classes.textField}
                            value={this.state.query}
                            onChange={this.handleChange("query")}
                            margin="normal"
                            variant="outlined"
                        />
                        <br></br>
                        <Button type="submit" variant="contained" size="medium" color="primary" className={classes.button}>
                            Search
                    </Button>
                    </form>
                </Grid>
                <p>
                    {notice}
                </p>
                <div>
                    {
                        //Edge case: if no book data
                        (this.state.totalItems !== 0 && !this.state.isLoading) ?
                            <BookCardContainer books={this.state.booksData} totalItems={this.state.totalItems} />
                            :
                            ""
                    }

                </div>
                <Grid item xs={6}>
                    {
                        this.state.totalPages >= 1 ?
                            //TODO: add page button
                            <Button variant="primary">Page 1</Button>
                            :
                            ""
                    }
                </Grid>
            </Grid>
        )
    }

}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
