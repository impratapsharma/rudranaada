export const formatDuration = (seconds:number) => `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
export const formatDate = (date:string) => new Intl.DateTimeFormat('en', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(date));
