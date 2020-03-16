const todos = [
    {text: 'play mariokart', author: 'alex'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));
