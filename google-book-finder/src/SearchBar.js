import React from 'react';
import BookCardContainer from './BookCardContainer';
//material ui component
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


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
        isLoading: false
    }

    //fetch google books data when submitting search form
    fetchData = () => {
        //My unique API key, no authentication needed. 
        //This key is only allowed for Google Books API.
        const ApiKey = 'AIzaSyAXJai7q64-kw03ojn8H2XVm8AOoTiUrqM';
        let query = this.state.query.split(" ").join("+")
        let booksURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${ApiKey}`;
        console.log(query)
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
                this.setState({
                    //send books information to state
                    booksData: data.items,
                    totalItems: data.totalItems,
                    isLoading: false
                })
            })
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
            console.log(this.state)
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
                notice = <Typography variant="h4">{this.state.totalItems} results. Displaying the first 10 results.</Typography>
            }
        }

        return (
            <div>
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
                {notice}
                <div>
                    {
                        //Edge case: if no book data
                        (this.state.totalItems !== 0 && !this.state.isLoading) ?
                            <BookCardContainer books={this.state.booksData} totalItems={this.state.totalItems} />
                            :
                            ""
                    }
                </div>

            </div>
        )
    }

}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
