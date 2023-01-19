export const blogPostDateFormat = (date: string) => {
    if (!date || isNaN(Date.parse(date))) return '';
    const d = new Date(date);
    return d.toLocaleDateString(undefined, { month: '2-digit', day: '2-digit', 'year': '2-digit' });
}