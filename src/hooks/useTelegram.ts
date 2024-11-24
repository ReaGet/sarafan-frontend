export const useTelegram = () => {
  const tg = window.Telegram?.WebApp

  return {
   tg,
   userId: tg.initDataUnsafe?.user?.id || 107324410,
   username: tg?.initDataUnsafe?.user?.username || 'unknown',
  }
}