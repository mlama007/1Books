app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'My favorite Books'; 
  $scope.promo = 'Please rate';
  $scope.products = 
	  [
      { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg', 
      likes: 0,
      dislikes: 0
      }, 
      { 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg', 
      likes: 0,
      dislikes: 0
      },   
    	{ 
      name: 'The Giver', 
      price: 5.79, 
      pubdate: new Date('1993', '05', '18'), 
      cover: 'https://upload.wikimedia.org/wikipedia/en/7/7b/The_Giver_first_edition_1993.jpg' , 
      likes: 0,
      dislikes: 0
      }, 
      { 
      name: 'The Son', 
      price: 6.44, 
      pubdate: new Date('2012', '9', '02'), 
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51tacsx9hEL._SY346_.jpg', 
      likes: 0,
      dislikes: 0
      }       
  	];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
		};
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
		};
}]);