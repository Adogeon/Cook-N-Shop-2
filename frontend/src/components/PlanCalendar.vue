<template>
  <div class="card my-3 px-0 rounded-0">
    <div class="card-header bg-primary bg-gradient text-light ">
      <h1 class="card-title">Meal Plan</h1>
    </div>
    <div class="card-body">
      <table class="table table-responsive">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Breakfast</th>
            <th scope="col">Lunch</th>
            <th scope="col">Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="[todayDate === 1 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Monday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  No added sugar muesli, semi-skimmed milk and canned peaches(in
                  juice)
                </li>
                <li class="list-group-item border-0">
                  Small glass(150ml) orange juice
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Jacket potato with tuna mayonnaise, sweetcorn, and salad
                </li>
                <li class="list-group-item border-0">
                  2 oatcase, cheese and grapes
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Chickpea and spinach curry (retail cooking sauce) with brown
                  rice
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 2 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Tuesday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  2 slices wholemeal toast with peanut butter
                </li>
                <li class="list-group-item border-0">Skinny latte</li>
                <li class="list-group-item border-0">
                  Small glass(150ml) orange juice
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Chicken and wholewheat pasta salad
                </li>
                <li class="list-group-item border-0">4 dried apricots</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Baked salmon, new potatoes, broccoli and kale
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 3 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Wednesday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Bran flakes, semi-skimmed milk and chopped banana
                </li>
                <li class="list-group-item border-0">Skinny latte</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Cheese and chutney and salad on a wholemeal
                </li>
                <li class="list-group-item border-0">1 pear</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Vegetarian bean chili with brown rice
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 4 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Thursday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Small can of reduced sugar baked beans on 1 slice of wholemeal
                  toast
                </li>
                <li class="list-group-item border-0">Skinny latte</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Ham salad sandwich with salad cream, on wholemeal bread
                </li>
                <li class="list-group-item border-0">Lentil soup</li>
                <li class="list-group-item border-0">2 tangerines</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Lean pork and pak choi stir fry with noodles
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 5 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Friday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  2 fortified wheat biscuits, semi-skimmed milk and chooped
                  banana
                </li>
                <li class="list-group-item border-0">
                  Small glass(150ml) orange juice
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Houmous, rocket and red pepper on a wholemeal wrap
                </li>
                <li class="list-group-item border-0">
                  Low fat yogurt, honey and cinnamon
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Fish pie, peas and green beans
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 6 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Saturday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Scrambled eggs, grilled tomato and 2 slices of wholemeal toast
                </li>
                <li class="list-group-item border-0">
                  Small glass (150ml) orange juice
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Thin crust Margherita pizza with added vegetables and a side
                  salad
                </li>
                <li class="list-group-item border-0">Fruit salad</li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Spaghetti Bolognese with wholewheat spaghetti
                </li>
              </ul>
            </td>
          </tr>
          <tr :class="[todayDate === 0 ? activeClass : '']">
            <th scope="row" class="align-middle">
              Sunday
            </th>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Porridge with dried figs and seeds
                </li>
                <li class="list-group-item border-0">Tea</li>
                <li class="list-group-item border-0">
                  Small glass (150ml) apple juice
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Roast chicken, roast potatoes, peas and carrot
                </li>
                <li class="list-group-item border-0">
                  <router-link to="/recipe/1"
                    >Homemade spiced rice pudding</router-link
                  >
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item border-0">
                  Cheese and onion omelette, sweet potato wedges, green salad,
                  lemon mayonnaise
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as dayjs from "dayjs";

export default {
  name: "PlanCalendar",
  data() {
    return {
      activeClass: "border border-primary border-2 ",
      todayDate: dayjs().day()
    };
  }
};
</script>
