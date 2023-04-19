<template>
	<v-card class="mx-auto">
		<!--
    <v-toolbar color="secondary">
      <v-btn variant="text" icon="mdi-menu"></v-btn>

      <v-toolbar-title>Courses</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-view-module"></v-btn>
    </v-toolbar>
    -->

		<v-list
			:lines="props.course.length.toString()"
			v-for="(sections, sectionIndex) in props.course"
			:key="sectionIndex"
		>
			<v-list-subheader inset> {{ sections.title }} </v-list-subheader>

			<v-list-item
				v-for="(item, itemIndex) in sections.lists"
				:key="itemIndex"
				:title="item"
			>
				<template v-slot:prepend>
					<v-avatar color="green-lighten-1">
						<font-awesome-icon :icon="['fas', 'code']" />
					</v-avatar>
				</template>

				<template v-slot:append>
					<v-btn color="grey-lighten-1" icon="fa:fas fa-code" variant="text"
						>View</v-btn
					>
				</template>
			</v-list-item>
			<v-divider
				v-if="sectionIndex + 1 === props.course.length"
				inset
			></v-divider>
		</v-list>
	</v-card>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import { PropType } from 'vue';

interface CourseLang {
	sectionTitle: string;
	list: string[];
}

const props = defineProps({
	course: {
		type: Array as PropType<CourseLang[]>,
	},
});
</script>

<style lang="scss" scoped></style>
