import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.question.create({
    data: {
      text: 'Quais são todos os valores centrais da Mobiliza?',
      options: {
        create: [
          { text: '#tamojunto', isCorrect: true },
          { text: '#aprendemosParaCrescer', isCorrect: true },
          { text: '#entregamos UAU', isCorrect: true },
          { text: '#somosMobilizadores', isCorrect: true },
          { text: '#expertiseNaGestaoDeProjetos', isCorrect: true },
          { text: '#expersiteanagestaodeprojetos', isCorrect: false },
        ],
      },
    },
  });
  console.log('Seed de questão inserido com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
