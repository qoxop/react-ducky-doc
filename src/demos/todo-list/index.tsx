import { injectReduce } from 'src/store';
import { reducer, name } from './model';
import { TodoApp } from './app';

injectReduce({ key: name, reducer });

export default TodoApp;