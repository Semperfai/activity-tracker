<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import type { FunctionalComponent } from 'vue'

const navItems: string[] = ['timeline', 'activities', 'progress']
const renderNavigationIcon = (name: string): FunctionalComponent => {
  if (name == 'timeline') return ClockIcon
  else if (name == 'activities') return ListBulletIcon
  else if (name == 'progress') return ChartBarIcon
  else return ClockIcon
}
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="##">
      <img src="./assets/imgs/logo.png" alt="logo" class="h-9" />
    </a>
    <a href="##">
      <div v-if="true" class="flex items-center gap-1 text-sm">
        Day complete
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1 text-sm">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main class="flex flex-grow flex-col">
    Lorem ipsum dolor sit, amet consectetur a Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Dicta voluptatum accusantium obcaecati, soluta atque sit! Beatae perspiciatis quam in
    pariatur accusamus dolore porro consequatur est tempora, fugiat tempore rem provident sunt vitae
    molestiae autem natus reiciendis placeat et ipsam aut impedit aperiam omnis! Quis corrupti
    mollitia suscipit laboriosam! Modi perspiciatis veniam eaque amet optio aut vero, perferendis
    molestiae quis. Minima facilis perferendis voluptatibus sapiente nam, odio a harum. Et molestias
    pariatur a minima corporis fugiat officiis qui, consectetur commodi, nostrum corrupti fuga iure
    tempora rem ad aliquam quod eveniet vel, maiores illo dicta blanditiis minus. At praesentium
    unde ipsam necessitatibus, nulla dolores modi facere voluptas nihil dolor odio accusamus
    recusandae molestias veniam blanditiis ipsum iste nostrum esse temporibus? Quo itaque
    praesentium quod a. Repudiandae praesentium quibusdam labore dolor perspiciatis enim modi, iure
    eius deserunt natus consectetur laudantium possimus accusantium a excepturi rerum doloremque
    laboriosam soluta explicabo ex beatae ullam earum culpa eligendi! Sit nam dolor eum, facilis
    magnam deserunt nihil consequatur necessitatibus voluptates. Distinctio iure voluptatibus, sed
    eum impedit mollitia velit fuga voluptas deleniti fugiat ipsam, tempora quasi vitae commodi
    autem fugit repellendus placeat quis illum excepturi! Dolorum quos quisquam eligendi tenetur
    optio ipsam repudiandae beatae odio veritatis asperiores aut consectetur rem quae deleniti
    exercitationem quas, esse sit alias numquam, pariatur omnis magnam modi. Modi voluptates odio ex
    itaque optio explicabo, et ea quidem reprehenderit, cupiditate nulla fugiat ducimus laudantium!
    Fugiat iusto accusantium repellat beatae earum sed, quae, magnam error maxime distinctio sit
    doloremque voluptates dolore rerum ratione sint quos nostrum ullam totam, explicabo qui delectus
    facilis quibusdam enim? Unde dolorum non debitis modi, nesciunt similique magni a minus fugit,
    quia obcaecati beatae autem voluptas libero enim quibusdam deleniti dolor atque labore odio
    corporis ex dolore placeat. Corporis nam eos rem, tempore ea quia accusantium culpa et eveniet
    officia praesentium facere necessitatibus aperiam nobis laudantium dolore, dicta minus maxime
    architecto ab temporibus. Tenetur, odio eius veniam placeat voluptas quo optio tempora eligendi
    animi deserunt beatae inventore. Error magnam sunt beatae similique facere magni at. Quia, ex ut
    consequuntur eveniet dolore accusantium recusandae! Impedit id magni nihil delectus soluta
    blanditiis accusamus veniam excepturi deserunt, at nesciunt necessitatibus expedita magnam,
    eligendi sapiente aspernatur saepe porro. Ex, beatae neque. Debitis cumque odit illum harum
    excepturi quo nam magni error recusandae. Nisi doloremque voluptatum quae, recusandae
    necessitatibus ipsa vitae, fuga repellat culpa fugiat, itaque odit magni tenetur quasi natus.
    Ratione quidem pariatur ducimus labore beatae ullam quae accusamus rerum nesciunt obcaecati. Vel
    aut maxime reprehenderit a quisquam consequuntur neque obcaecati repellat voluptatibus. Ex
    laudantium soluta totam voluptatum, unde sint perspiciatis, architecto quam ut dolores magnam
    vero velit facilis voluptates. Iusto hic ipsam cum. Blanditiis officia animi nam cum sunt quam
    ratione doloremque assumenda vel voluptatibus? Illo dignissimos est dolorem molestias. Quod
    exercitationem, provident incidunt quaerat cupiditate dolorem, debitis est, illum quam nam
    maiores autem assumenda minima architecto! Nisi, at hic nam magnam culpa praesentium cumque
    architecto facere, optio dolore explicabo expedita consequatur totam nobis ducimus iste odit?
    Aut quas minus, velit provident repellat culpa!
  </main>
  <nav class="sticky bottom-0 z-10 bg-white text-2xl">
    <ul class="flex items-center justify-around border-t">
      <li v-for="page in navItems" :key="page" class="flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" :href="`#${page}`">
          <component :is="renderNavigationIcon(page)" class="h-6 w-6" />
          {{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>
