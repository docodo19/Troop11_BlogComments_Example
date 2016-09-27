namespace blogapp {

    angular.module('blogapp', ['ui.router', 'ngResource', 'ui.bootstrap', 'yaru22.angular-timeago']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: blogapp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: blogapp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '/ngApp/views/blog.html',
                controller: blogapp.Controllers.BlogController,
                controllerAs: 'vm'
            })
            .state('blogDetails',{
                url: '/blog/:id',
                templateUrl: '/ngApp/views/blogDetails.html',
                controller: blogapp.Controllers.BlogDetailsController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
