export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  return prisma.customer.findUnique({
    where: {
      id,
    },
  })
})
