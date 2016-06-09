var React = require('react');
var AnimalData = require('./animalData');

var Animals = React.createClass({
	//setting an initial state for our data to be born into
	//our data is an array of objects according to postman
	//setting our animals object to an empty array to then absorb our data
	getInitialState: function(){
		return {
			animals: []
		}
	},

	getAllAnimalsFromServer: function(){
		//simple ajax call getting our data from our API endpoint
		//set this to the variable self to solve scoping issues
		var self = this;
		$.ajax({
			method: 'GET',
			url: '/animals'
		}).done(function(data){
			//should be seeing your array of objects in the browser console
			//will be empty if you do not have data on your local machine
			console.log(data);
			self.setState({ animals: data })
		})
	},

	componentDidMount: function(){
		//invoking our ajax function to do a GET request
		this.getAllAnimalsFromServer();
	},

	render: function(){
		//need to map through our array 
		//and pass the properties down to the AnimalDataComponent
		//now stored in name, species, color, and age - key is necessary only to remove errors from console
		//will be calling {animals} down below to invoke our data
		var animals = this.state.animals.map(function(item){
			return <AnimalData 
					name={ item.name }
					species={ item.species }
					color={ item.color }
					age={ item.age }
					key={ item._id } />
		});
		

		//our final component return wrapped in our div's
		return (
			<div>
				<h1>Animals will be on our page from our database!</h1>
					{ animals }
			</div>
			)
	}
});

module.exports = Animals;