namespace blogapp.Controllers {

    export class BlogController {

        public blogs;

        constructor(private blogService: blogapp.Services.BlogService){
            this.getBlog();
        }

        getBlog(){
            this.blogs = this.blogService.getBlogs();
        }

    }


}
