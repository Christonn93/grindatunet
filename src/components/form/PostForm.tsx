import React from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../store/authStore";
import { useCreatePost } from "../../hooks/query/useCreatePost";
import { PostData } from "src/types/createTypes";

const validationSchema = Yup.object({
 title: Yup.string().required("Title is required"),
 heroImage: Yup.mixed().required("Hero image is required"),
 content: Yup.string().required("Content is required"),
 tags: Yup.string().matches(/^#\w+$/, "Tags should start with #"),
});

const PostForm: React.FC = () => {
 const { user } = useAuthStore((state) => state);
 const { mutate, isError, error } = useCreatePost();

 const formik = useFormik({
  initialValues: {
   title: "",
   heroImage: null as File | null,
   images: [] as File[],
   content: "",
   tags: "",
  },
  validationSchema,
  onSubmit: async (values) => {
   console.log("Form submitted with values:", values); // Debugging line

   if (!user) {
    console.error("User is not authenticated.");
    return; // Check if user is logged in
   }

   const heroImageUrl = values.heroImage ? URL.createObjectURL(values.heroImage) : "";
   const imageUrls = values.images.map((file) => URL.createObjectURL(file));

   const postData: PostData = {
    title: values.title,
    heroImage: heroImageUrl,
    images: imageUrls,
    content: values.content,
    tags: values.tags,
    date: new Date().toISOString(),
    author: user.id,
   };

   try {
    console.log("Posting data:", postData); // Debugging line
    await mutate(postData); // Call the mutate function from useCreatePost
    alert("Post submitted successfully!");
    formik.resetForm();
   } catch (error) {
    console.error("Error submitting post:", error);
    alert("Failed to submit post.");
   }
  },
 });

 return (
  <Box component="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
   <Typography variant="h4" gutterBottom>
    Create a New Post
   </Typography>
   <TextField
    label="Title"
    variant="outlined"
    fullWidth
    margin="normal"
    name="title"
    value={formik.values.title}
    onChange={formik.handleChange}
    error={formik.touched.title && Boolean(formik.errors.title)}
    helperText={formik.touched.title && formik.errors.title}
   />
   <input
    accept="image/*"
    type="file"
    id="hero-image"
    style={{ display: "none" }}
    onChange={(event) => {
     if (event.target.files) formik.setFieldValue("heroImage", event.target.files[0]);
    }}
   />
   <label htmlFor="hero-image">
    <IconButton color="primary" component="span">
     <PhotoCameraIcon />
    </IconButton>
    <Typography variant="body1" component="span" sx={{ ml: 2 }}>
     Upload Hero Image
    </Typography>
   </label>
   {formik.values.heroImage && (
    <Typography variant="body2" sx={{ mt: 1 }}>
     {formik.values.heroImage.name}
    </Typography>
   )}
   <input
    accept="image/*"
    type="file"
    multiple
    id="additional-images"
    style={{ display: "none" }}
    onChange={(event) => {
     if (event.target.files) formik.setFieldValue("images", Array.from(event.target.files));
    }}
   />
   <label htmlFor="additional-images">
    <IconButton color="primary" component="span">
     <PhotoCameraIcon />
    </IconButton>
    <Typography variant="body1" component="span" sx={{ ml: 2 }}>
     Upload Additional Images
    </Typography>
   </label>
   {formik.values.images.length > 0 && (
    <Typography variant="body2" sx={{ mt: 1 }}>
     {formik.values.images.map((image) => image.name).join(", ")}
    </Typography>
   )}
   <TextField
    label="Content"
    variant="outlined"
    fullWidth
    margin="normal"
    multiline
    rows={4}
    name="content"
    value={formik.values.content}
    onChange={formik.handleChange}
    error={formik.touched.content && Boolean(formik.errors.content)}
    helperText={formik.touched.content && formik.errors.content}
   />
   <TextField
    label="Tags (use # for tags)"
    variant="outlined"
    fullWidth
    margin="normal"
    name="tags"
    value={formik.values.tags}
    onChange={formik.handleChange}
    error={formik.touched.tags && Boolean(formik.errors.tags)}
    helperText={formik.touched.tags && formik.errors.tags}
   />
   <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
    Post
   </Button>
   {isError && <Typography color="error">{error?.message}</Typography>}
  </Box>
 );
};

export default PostForm;
