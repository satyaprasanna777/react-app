import todosResponse from '../../fixtures/getTodosResponse'

class TodoFixtureService {
    getTodosApi() {
        return new Promise((resolve, reject) => {
            resolve(todosResponse)
        })
    }
}

export default TodoFixtureService;
