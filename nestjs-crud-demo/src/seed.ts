import { AppDataSource } from './data-source';
import { User } from './users/user.entity';

async function seed() {
  await AppDataSource.initialize();

  const userRepository = AppDataSource.getRepository(User);

  const users = [
    {
      name: 'Alice Test',
      email: 'alice@example.com',
    },
    {
      name: 'Bob Test',
      email: 'bob@example.com',
    },
  ];

  for (const userData of users) {
    const existing = await userRepository.findOne({
      where: { email: userData.email },
    });

    if (!existing) {
      const user = userRepository.create(userData);
      await userRepository.save(user);
      console.log(`Seeded user: ${user.email}`);
    } else {
      console.log(`User already exists: ${userData.email}`);
    }
  }

  await AppDataSource.destroy();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
