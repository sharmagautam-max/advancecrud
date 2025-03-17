var a=10
function mull(a)
{
    return a*2;
}
// module.exports=mull
function common(a,cb)
{
    return  cb(a);
}
// module.exports=common;
function min(m,n)
{
    return n(m)
}
module.exports=min