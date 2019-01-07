/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/vv2529/a-tiny-JS-world
   Web app: https://vv2529.github.io/a-tiny-JS-world
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
	type: 'dog',
	name: 'Bobik',
	gender: 'male',
	legs: 4,
	hands: 0,
	says: 'Woof!'
},
cat = new Proxy({
	type: 'cat',
	name: 'Cutie',
	gender: 'female',
	legs: 4,
	hands: 0,
	says: 'Meow!'
}, {
	set: function(obj, prop, value){
		// When cat.says updates, catWoman.says also updates
		if(prop == 'says') catWoman.says = value;
		// Simulate default behavior
		obj[prop] = value;
	}
}),
woman = {
	type: 'human',
	name: 'Kate',
	gender: 'female',
	legs: 2,
	hands: 2,
	says: 'What a beautiful day!'
},
man = {
	type: 'human',
	name: 'Eric',
	gender: 'male',
	legs: 2,
	hands: 2,
	says: 'Lets go!'
},
catWoman = {
	type: 'half-cat/half-human',
	name: 'Felicia',
	gender: 'female',
	legs: 2,
	hands: 2,
	says: cat.says
};

// Cant set friends during initialization
dog.friends = [cat, woman, man];
cat.friends = [woman, catWoman];
woman.friends = [cat, man];
man.friends = [dog, woman];
catWoman.friends = [cat];

// ======== OUTPUT ========
[dog, cat, woman, man, catWoman].forEach(entity => {
	print(formString(entity));
});

function formString(entity){
	const props = ['type', 'name', 'gender', 'legs', 'hands', 'says'].map(prop => entity[prop]);
	props.push(entity.friends.map(item => item.name).join(', '));
	return props.join('; ');
}
