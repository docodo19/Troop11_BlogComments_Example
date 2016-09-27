namespace blogapp.Services {

    export class BlogService {
        private blogResource;

        constructor($resource: ng.resource.IResourceService){
            this.blogResource = $resource('/api/blogs/:id', null, {
                saveComment:{
                    method: 'POST',
                    url: '/api/blogs/comments/:blogId'
                }
            });
        }

        getBlogs(){
            return this.blogResource.query();
        }

        getBlog(id){
            return this.blogResource.get({id: id});
        }

        saveBlog(blog){
            return this.blogResource.save(blog).$promise;
        }

        deleteBlog(id){
            return this.blogResource.delete({id: id}).$promise;
        }

        saveComment(blogId, comment){
            return this.blogResource.saveComment({blogId: blogId}, comment).$promise;
        }


    }
    angular.module("blogapp").service('blogService', BlogService);
}
