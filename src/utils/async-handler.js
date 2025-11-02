const asyncHandler = (requestHandler) => async (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
}
/*     try {
        await requestHandler(req,res,next);
    }catch(error) {
        console.error(`Error occured in async handler: ${error}`);
        next(error);
    }
} */
export default asyncHandler;