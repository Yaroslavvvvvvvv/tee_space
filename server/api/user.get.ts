export default defineEventHandler(async () => {
  await prisma.customer.create({
    data: {
      email: 'valerii@gmail.com',
      name: 'Valerii',
    },
  })
  return prisma.customer.findMany()
})
