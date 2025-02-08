import asyncio

async def worker(id, jobs, results):
    while not jobs.empty():
        job = await jobs.get()
        print(f"Worker {id} started job {job}")
        await asyncio.sleep(1)
        print(f"Worker {id} finished job {job}")
        results.append(job * 2)

async def main():
    jobs = asyncio.Queue()
    results = []

    for job in range(1, 6):
        await jobs.put(job)

    workers = [asyncio.create_task(worker(i, jobs, results)) for i in range(1, 4)]

    await asyncio.gather(*workers)

    print(results)

asyncio.run(main())