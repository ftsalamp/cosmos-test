import ComplexComponent from '../complex-component'

export default {
    component: ComplexComponent,

    fetch: [
        {
            matcher: '/users',
            response: 404
        }
    ]
};
