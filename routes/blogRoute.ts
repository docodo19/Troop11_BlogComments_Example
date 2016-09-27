import * as express from 'express';
import * as mongodb from 'mongodb';
import Blog from '../models/blog';
import Comment from '../models/comment';


let ObjectId = mongodb.ObjectID;
let blogRoute = express.Router();

blogRoute.post('/', (req, res)=>{
    let blog = new Blog();

    blog.title = req.body.title;
    blog.message = req.body.message;
    blog.timeCreate = new Date();
    blog.isActive = true;

    blog.save().then((blog)=>{
        res.status(201).send(blog)
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

blogRoute.get('/', (req, res)=>{
    Blog.find().populate('comments').then((blogs)=>{
        res.send(blogs)
    }).catch((err)=>{
        res.status(404).send(err);
    });
});

blogRoute.get('/:id', (req, res)=>{
    Blog.findById(req.params['id']).populate('comments').sort('timeCreate')
    .then((blog)=>{
        res.send(blog);
    }).catch((err)=>{
        res.status(404).send(err);
    });
});

blogRoute.post('/comments/:blogId', (req, res)=>{
    let blogId = new ObjectId(req.params['blogId']);

    let comment = new Comment();
    comment.message = req.body.message;
    comment.timeCreate = new Date();

    comment.save()
    .then((comment)=>{

        let commentId = new ObjectId(comment._id);

        Blog.update({_id: blogId}, { $push: { comments: commentId }})
        .then(()=>{
            res.sendStatus(201);
        }).catch(()=>{
            res.sendStatus(404);
        });
    }).catch(()=>{
        res.sendStatus(400);
    });
});

export default blogRoute;
