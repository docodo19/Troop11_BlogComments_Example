namespace blogapp.Controllers {

    export class BlogDetailsController {
        public blog;
        public comment = {};
        private blogId;

        constructor(
            private blogService: blogapp.Services.BlogService,
            private $stateParams: ng.ui.IStateParamsService){

                this.blogId = this.$stateParams['id'];
                this.getBlog();
        }

        getBlog(){
            this.blog = this.blogService.getBlog(this.blogId);
        }

        saveComment() {
            this.blogService.saveComment(this.blogId, this.comment).then(()=>{
                this.getBlog();
            });
        }
    }
}
