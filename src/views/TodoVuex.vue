<template>
  <div class="todo">
    <div class="container">
      <add-todo />
      <filter-todos />
      <h3>Todos</h3>
      <div class="legend">
        <span>Double click to mark as complete</span>
        <span> <span class="incomplete-box"></span> = Incomplete </span>
        <span> <span class="complete-box"></span> = Complete </span>
      </div>
      <div class="todos">
        <div
          @dblclick="onDblClick(todo)"
          class="todo"
          v-for="todo in allTodos"
          :key="todo.id"
          :class="{'is-complete': todo.completed}"
        >
          {{ todo.title }}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'

export default {
  name: 'TodoVuex',
  components: {
    AddTodo,
    FilterTodos
  },
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick (todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updTodo)
    }
  },
  created () {
    this.fetchTodos()
  }
}
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  height: 100%;
  font-family: 'SF Mono';
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    .todo {
      border: 1px solid #cccccc;
      background: #41b883;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      user-select: none;
      i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #ffffff;
        cursor: pointer;
      }
      &.is-complete {
        background: #35495e;
        color: #ffffff
      }
    }
  }
  @media screen and (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    .complete-box {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #35495e;
    }
    .incomplete-box {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #41b883;
    }
  }
}
</style>
