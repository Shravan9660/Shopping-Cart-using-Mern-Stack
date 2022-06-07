export default function formatcurrency(num){
    return "Rs. " +Number(num.toFixed(1)).toLocaleString() +"";
}