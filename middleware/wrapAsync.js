exports.wrapAsync = (wrapperFn) => {
    return async( req,res, next ) => {
        try{
            await wrapperFn(req, res, next)
        }
        catch(err){
            next(err)
        }
    }
}