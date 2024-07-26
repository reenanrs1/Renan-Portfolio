

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/reenanrs1/Renan-Portfolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}