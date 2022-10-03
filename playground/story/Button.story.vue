<template>
  <Story
    title="Components/App/Button"
    :layout="{
      type: 'grid',
      width: 200
    }"
  >
    <Variant title="default size Button">
      <AppButton class="bg-blue-600 text-white px-4"> Click me </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton class="bg-blue-600 text-white">
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>

    <Variant title="md Button">
      <AppButton md class="bg-blue-600 text-white"> Click me </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton md class="bg-blue-600 text-white">
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>

    <Variant title="lg Button">
      <AppButton lg class="bg-blue-600 text-white"> Click me </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton lg class="bg-blue-600 text-white">
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>

    <Variant title="xl Button">
      <AppButton xl class="bg-blue-600 text-white"> Click me </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton xl class="bg-blue-600 text-white">
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>

    <Variant title="outline Button">
      <AppButton
        class="border-blue-600 border text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        Click me
      </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton class="border-blue-600 border text-blue-600 hover:bg-blue-600 hover:text-white">
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>

    <Variant title="isLoading Button">
      <AppButton class="bg-blue-600 text-white" is-loading>
        Click me
      </AppButton>

      <template #source>
        <textarea v-pre>
          <AppButton class="bg-blue-600 text-white" is-loading>
            Click me
          </AppButton>
        </textarea>
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# AppButton component

Fontsize, padding and height are pre-configured according to the md, lg and xl size props.
</docs>
